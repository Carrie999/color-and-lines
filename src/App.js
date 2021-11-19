import './App.css';
import React, {  useState } from 'react';
const COLORS = [
  ['#ffe900','#00cdc0',0],
  ['#43c1f4','#e5f06b',1], 
  ['#ffea4c','#ff75e1',0], 
  ['#caf7f3','#f8fdde',0],
  ['#ffea4c','#00f076',0],
  ['#BCFFB9','#F5FDB0',0],
  ['#ffea4c','#b559ff',0],
  ['#ffc7d3','#8fefe9',0], 
  ['#FF7A5A','#50E3C2',1],
  ['#fd0800','#078632',1],
  ['#00fff1','#ff0042',0],
  ['#ff7d00','#00d3bd',1],
  ['#00bb9a','#1d081d',1],
  ['#ffbd00','#60213b',0],
]

const TEXT = [
  '每个人都依靠自己的知识和认识，却又被之所束缚，还将这些称之为现实。但知识和认识是非常暧昧的东西，那个现实也许只不过是镜花水月，人们都是活在自我意识之中的，你不这样认为吗',
  '今天我在人生的道路上迷路了',
  '活着一定是没意义的，但是活下去的话说不定能找到有趣的事情，如你见到那朵花，如我见到你',
  '我本来想过着随便当个忍者，随便赚点钱。然后和不美又不丑的女人结婚，生两个小孩，第一个是女孩，第二个是男孩，等长女儿结婚，儿子也能够独当一面的时候，就从忍者的工作退休。之后，每天过着下将棋或围棋的悠闲隐居生活，然后比自己的老婆还要早老死，我就是想过这种生活',
  '隐约雷鸣，阴霾天空，但盼风雨来，能留你在此。隐约雷鸣，阴霾天空，即使无风雨，我亦留此地',
  '知道什么叫历史吗?生长于真相之下，明白过去，预感未来，知道那就叫历史',
  '我至今见过的家伙全都一个样，有时是酒，女人或神明，家族，国王，梦想，孩子，力量，大概不找个东西沉醉就活不下去吧，所有人都是某些事物的奴隶',
  '不是特别的就不行吗？我不这么认为喔。至少这孩子…才不需要变得多伟大。就算没有比别人优越…因为你看，他多可爱啊。所以这孩子已经很伟大了，毕竟他可是出生到这世上了呀',
  '这个世界，原本是残酷的，但却又如此美好',
  '世界上没有什么偶然，有的只是必然和结果',
  '所谓的“世界”啊!虽然是无限宽阔，其实却且很小！只限于自己看得见的范围，听得到的范围，手碰得到的范围，感觉得到的范围。世界啊！它并不存在，而是靠你自己创造出来的',
  '语言是可怕的东西呢，话一说出口就没法收回了，也不能当作什么也没说过。人们不明白语言有多么强烈的束缚力量，而持续使用着这种枷锁',
  '我们所能做的，就只有一点点而已……',
  '“名字”是很重要的！名字是有力量的！不管是生物还是非生物，只要冠上那个名字的话…… 就能和叫做那个名字的东西拥有相同的力量喔',
  '被知道名字……就等于是被对手掌握了灵魂的一部分！被知道生日……就等于是被掌握了从出生以来的经历与未来的发展',
  '生物啊！受到各式各样的束缚：自然的规范，时间的流逝，名为“身体”的容器，名为“心灵”的自我。那些是所有生物共同的枷锁。不过，也有只能使用在人类身上的枷锁。……言灵……可是语言并不只是束缚自己而已！也会束缚别人',
  '每个人做任何事,都只是为了自己,虽然有人会说,我希望能为哪个人做些什么,但事实上,也只不过是希望看到别人幸福时,自己也有份幸福感罢了',
  '我那时还不了解人性多么矛盾，我不知道真挚中含有多少做作，高尚中蕴藏着多少卑鄙，或者，即使在邪恶里也找得着美德',
  '过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原，即使最狂乱且坚韧的爱情，归根结底也不过是一种瞬息即逝的现实',
]
 // ['#00afd8','#f9c1c4'],
// ['#41bc00','#ffbd00'],
// ['#ffc7d3','#8fefe9'], //1
const ua = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|BlackBerry|ucweb|midp|rv:1.2.3.4|windows mobile/i.test(ua);



function App() {
  const [num, setNum] = useState(Math.floor(Math.random()*COLORS.length));
  return (
    <div className="App" onClick={()=>{
      if(num === COLORS.length -1){
        setNum(0)
      }else{
        setNum(num+1)
      }
    }}>
     
      <div className={isMobile?'wrap2':'wrap'}>
        <div className="text" style={{
            color: COLORS[num][2] === 0 ? 'rgba(0,0,0,0.8)':'rgba(255,255,255,0.8)',
            fontSize:isMobile?'18px':'26px'
            }}>{TEXT[Math.floor(Math.random()*TEXT.length)]}</div>
      </div>  
      
     <div className="up" style={{
        background:COLORS[num][0]
      }}>
      </div >
      <div className="down"
        style={{
          background:COLORS[num][1]
        }}>
      </div > 
       {/* <div className="next" onClick={()=>{
         setNum(num+1)
       }}>下一个 </div > */}

       {/* <div className="all">
        {
          COLORS.map((item)=>(<div className="item" >
            <div className="item-up" style={{
              background:item[0]
            }}></div>
            <div className="item-down" style={{
              background:item[1]
            }}></div>
          </div>))
        }
          
       </div>  */}
      
    </div>
  );
}

export default App;
