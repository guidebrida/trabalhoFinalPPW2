import { Card } from 'antd';
const { Meta } = Card;
import { useState } from 'react';

export const CompFunkoCard = () => {
  const onload = async (values) => {  
    try{
      const Result = await axios.get("http://localhost:5000/api/funko/", values)
      console.log(Result.status); 
    }catch(error){
      console.log(error.request.status)
    }
    
    };
  return (
<>
  <Card
    hoverable
    style={{
      width: 240
    }}
    cover={
      <img
        alt="example"
        src="https://m.media-amazon.com/images/I/61IuP37ACQS._AC_SY679_.jpg"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </>
  );
};


