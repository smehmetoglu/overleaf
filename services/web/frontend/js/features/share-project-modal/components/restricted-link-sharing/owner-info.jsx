import { useProjectContext } from '@/shared/context/project-context'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Icon from '@/shared/components/icon'

export default function OwnerInfo() {
  const { t } = useTranslation()
  const { owner } = useProjectContext()

  return (
    <Row className="project-member">
      <Col xs={9}>
        <div className="project-member-email-icon">
          <Icon type="user" fw />
          <div className="email-warning">{owner?.email}</div>
        </div>
      </Col>
      <Col xs={3} className="text-left">
        {t('owner')}
      </Col>
    </Row>
  )
}
