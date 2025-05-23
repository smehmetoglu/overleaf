import { expect } from 'chai'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import sinon from 'sinon'
import { projectsData } from '../../../../fixtures/projects-data'
import { location } from '@/shared/components/location'
import { CompileAndDownloadProjectPDFButtonTooltip } from '../../../../../../../../frontend/js/features/project-list/components/table/cells/action-buttons/compile-and-download-project-pdf-button'
import fetchMock from 'fetch-mock'
import * as eventTracking from '@/infrastructure/event-tracking'

describe('<CompileAndDownloadProjectPDFButton />', function () {
  let sendMBSpy: sinon.SinonSpy

  beforeEach(function () {
    sendMBSpy = sinon.spy(eventTracking, 'sendMB')
    this.locationWrapperSandbox = sinon.createSandbox()
    this.locationWrapperStub = this.locationWrapperSandbox.stub(location)
    render(
      <CompileAndDownloadProjectPDFButtonTooltip project={projectsData[0]} />
    )
  })

  afterEach(function () {
    this.locationWrapperSandbox.restore()
    fetchMock.removeRoutes().clearHistory()
    sendMBSpy.restore()
  })

  it('renders tooltip for button', async function () {
    const btn = screen.getByRole('button', { name: 'Download PDF' })
    fireEvent.mouseOver(btn)
    await screen.findByRole('tooltip', { name: 'Download PDF' })
  })

  it('downloads the project PDF when clicked', async function () {
    fetchMock.post(
      `/project/${projectsData[0].id}/compile`,
      {
        status: 'success',
        compileGroup: 'standard',
        clsiServerId: 'server-1',
        outputFiles: [{ path: 'output.pdf', build: '123-321' }],
      },
      { delay: 10 }
    )

    const btn = screen.getByRole('button', { name: 'Download PDF' })
    fireEvent.click(btn)

    await waitFor(() => {
      screen.getByRole('button', { name: 'Compiling…' })
    })

    const assignStub = this.locationWrapperStub.assign
    await waitFor(() => {
      expect(assignStub).to.have.been.called
    })

    expect(assignStub).to.have.been.calledOnce
    expect(assignStub).to.have.been.calledWith(
      `/download/project/${projectsData[0].id}/build/123-321/output/output.pdf?compileGroup=standard&popupDownload=true&clsiserverid=server-1`
    )

    expect(sendMBSpy).to.have.been.calledOnce
    expect(sendMBSpy).to.have.been.calledWith('project-list-page-interaction', {
      action: 'downloadPDF',
      page: '/',
      projectId: projectsData[0].id,
      isSmallDevice: true,
    })
  })

  it('displays a modal when the compile failed', async function () {
    fetchMock.post(`/project/${projectsData[0].id}/compile`, {
      status: 'failure',
    })

    const btn = screen.getByRole('button', {
      name: 'Download PDF',
    }) as HTMLButtonElement
    fireEvent.click(btn)

    await screen.findByText(
      `${projectsData[0].name}: PDF unavailable for download`
    )
    expect(this.locationWrapperStub.assign).to.have.not.been.called
  })
})
