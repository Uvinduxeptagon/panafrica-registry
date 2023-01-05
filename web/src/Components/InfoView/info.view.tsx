import { Col, Row } from 'antd';
import { DateTime } from 'luxon';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './info.view.scss';

export interface InfoViewProps {
  data: any;
  title: any;
  icon: any;
  hiddenColumns?: any;
}

const InfoView: FC<InfoViewProps> = (props: InfoViewProps) => {
  const { title, data, icon, hiddenColumns } = props;
  return (
    <div className="info-view">
      <div className="title">
        <span className="title-icon">{icon}</span>
        <span className="title-text">{title}</span>
      </div>
      <div>
        {Object.keys(data).map((k: any) => {
          if (hiddenColumns.indexOf(k) < 0) {
            return (
              <Row className="field" key={k}>
                <Col span={12} className="field-key">
                  {k}
                </Col>
                <Col span={12} className="field-value">
                  {data[k] instanceof DateTime
                    ? data[k].toLocaleString(DateTime.DATE_FULL)
                    : data[k] === '' || !data[k]
                    ? '-'
                    : data[k]}
                </Col>
              </Row>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

InfoView.defaultProps = {
  hiddenColumns: [],
};

export default InfoView;
