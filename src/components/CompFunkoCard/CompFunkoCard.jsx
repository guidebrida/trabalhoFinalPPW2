import { Card } from 'antd';
const { Meta } = Card;

const App = () => (
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
);

export default App;
