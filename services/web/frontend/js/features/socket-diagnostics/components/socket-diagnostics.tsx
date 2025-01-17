import React from 'react'
import type { ConnectionStatus } from './types'
import { useSocketManager } from './use-socket-manager'
import {
  ActionButton,
  ConnectionBadge,
  DiagnosticItem,
  ErrorAlert,
} from './diagnostic-component'
import { Container } from 'react-bootstrap-5'
import MaterialIcon from '@/shared/components/material-icon'

type NetworkInformation = {
  downlink: number
  effectiveType: string
  rtt: number
  saveData: boolean
  type: string
}

const NavigatorInfo = () => {
  if (!('connection' in navigator)) {
    return <div>Network Information API not supported</div>
  }

  const connection = navigator.connection as NetworkInformation
  return (
    <>
      <div>Downlink: {connection.downlink} Mbps</div>
      <div>Effective Type: {connection.effectiveType}</div>
      <div>Round Trip Time: {connection.rtt} ms</div>
      <div>Save Data: {connection.saveData ? 'Enabled' : 'Disabled'}</div>
      <div>Platform: {navigator.platform}</div>
      {/* @ts-ignore */}
      <div>Device Memory: {navigator.deviceMemory}</div>
      <div>Hardware Concurrency: {navigator.hardwareConcurrency}</div>
    </>
  )
}

export const SocketDiagnostics = () => {
  const { socketState, debugInfo, disconnectSocket, forceReconnect, socket } =
    useSocketManager()

  const getConnectionState = (): ConnectionStatus => {
    if (socketState.connected) return 'connected'
    if (socketState.connecting) return 'connecting'
    return 'disconnected'
  }

  const lastReceivedS = debugInfo.lastReceived
    ? Math.round((Date.now() - debugInfo.lastReceived) / 1000)
    : null

  return (
    <Container>
      <h1>Socket Diagnostics</h1>
      <ConnectionBadge state={getConnectionState()} />

      <div className="d-flex gap-2 mt-3">
        <ActionButton
          label="Reconnect"
          icon="refresh"
          onClick={forceReconnect}
        />
        <ActionButton
          label="Disconnect"
          icon="close"
          onClick={disconnectSocket}
          disabled={!socketState.connected}
        />
      </div>

      {socketState.lastError && <ErrorAlert message={socketState.lastError} />}

      <div className="card p-4 mt-3">
        <h3 className="text-lg">
          <MaterialIcon type="speed" /> Connection Stats
        </h3>
        <div className="space-y-2">
          <DiagnosticItem
            icon="network_ping"
            label="Ping Count"
            value={
              <>
                {debugInfo.received} / {debugInfo.sent}
                {lastReceivedS !== null && (
                  <>
                    <br />
                    Last received {lastReceivedS}s ago
                  </>
                )}
              </>
            }
            type={
              lastReceivedS !== null
                ? lastReceivedS < 4
                  ? 'success'
                  : 'danger'
                : undefined
            }
          />

          <DiagnosticItem
            icon="schedule"
            label="Latency"
            value={
              debugInfo.latency ? (
                <>
                  {debugInfo.latency} ms
                  <br />
                  Max: {debugInfo.maxLatency} ms
                </>
              ) : (
                '-'
              )
            }
            type={
              debugInfo.latency
                ? debugInfo.latency < 150
                  ? 'success'
                  : 'danger'
                : undefined
            }
          />
          <DiagnosticItem
            icon="difference"
            label="Clock Delta"
            value={
              debugInfo.clockDelta === null
                ? '-'
                : `${Math.round(debugInfo.clockDelta / 1000)}s`
            }
            type={
              debugInfo.clockDelta !== null
                ? Math.abs(debugInfo.clockDelta) < 1500
                  ? 'success'
                  : 'danger'
                : undefined
            }
          />
          <DiagnosticItem
            icon="signal_cellular_alt"
            label="Online"
            value={debugInfo.onLine?.toString() ?? '-'}
            type={debugInfo.onLine ? 'success' : 'danger'}
          />

          <DiagnosticItem
            icon="schedule"
            label="Current time"
            value={new Date().toUTCString()}
          />
          <DiagnosticItem
            icon="hourglass"
            label="Connection time"
            value={
              debugInfo.client?.connectedAt ? (
                <>
                  {new Date(debugInfo.client.connectedAt).toUTCString()} (
                  {Math.round(
                    (Date.now() - debugInfo.client.connectedAt) / 1000
                  )}
                  s)
                </>
              ) : (
                '-'
              )
            }
          />
          <DiagnosticItem
            icon="local_shipping"
            label="Transport"
            value={socket?.socket.transport?.name ?? '-'}
          />
          <DiagnosticItem
            icon="badge"
            label="Client Public ID"
            value={debugInfo.client?.publicId ?? '-'}
          />
          <DiagnosticItem
            icon="pin"
            label="IP Address"
            value={debugInfo.client?.remoteIp ?? '-'}
          />
          <DiagnosticItem
            icon="web"
            label="User agent"
            value={debugInfo.client?.userAgent ?? '-'}
          />

          <DiagnosticItem
            icon="directions_boat"
            label="Navigator info"
            value={<NavigatorInfo />}
          />
        </div>
      </div>
    </Container>
  )
}