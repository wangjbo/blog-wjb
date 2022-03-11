import './App.css'
import Nav from './components/Nav'
import Content from './components/Content';
import {useEffect} from 'react';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    console.log('欢迎来到我的个人博客');
    console.log('就读于浙江工业大学--研一')
    console.log('一个致力于前端开发的科研菜鸡')
    console.log('相信代码能够改变世界，改变人生')
    console.log('一起加油！')
  },[])
  return (
    <div className='reset'>
      <Nav/>
      <Content/>
      <Footer></Footer>
    </div>
  );
}

export default App;
