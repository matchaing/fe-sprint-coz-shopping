import { Link } from 'react-router-dom';

function nav() {
  return (
    <>
        <Link to='/products/list'>
            <p className='menuhover'>상품 리스트 페이지</p>
        </Link>
        <Link to='/bookmark'>
        <p className='menuhover'>북마크 페이지</p>
        </Link>
    </>
  );
}
export default nav;