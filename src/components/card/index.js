import React from 'react';
import './style.css';
import { Card, Col, Row } from 'antd';

import PageHeaderAnt from '../dataEntry/rate';

const cardData = [
    {
      name : "Bintang Lazuardi",
      job : "FrontEnd Developer"
    },
    {
      name : "Nur Rohman",
      job : "Android Developer"
    },
    {
      name : "Alfarel Zaki",
      job : "BackEnd Developer"
    },
    {
      name : "Maulana Adam",
      job : "UI/UX Designer"
    },
    {
      name : "Faris Albab",
      job : "Game Developer"
    },
    {
      name : "Ahmad Rifal",
      job : "Web Developer"
    },
  ]

  const CardAnt = () => {
    return(
      <div className="site-card-wrapper" style={{backgroundColor:'white', marginTop:0}}>
        <Row gutter={16}>
          {cardData.map(data => 
            <Col span={8}>
              <Card title={data.name} style={{minWidth:30,margin:'0 20 20 20'}}>
                <p className="job"> {data.job} </p>

                <PageHeaderAnt/>
              </Card>
            </Col>           
          )}         
        </Row>
      </div>
    )
  }


export default CardAnt;
