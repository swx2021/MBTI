import { View,Image} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from "@tarojs/taro";
import headerBg from '../../assets/headerBg.jpg'
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";
import '../../app.scss'



/**
 * 主页
 * @author swx
 */
export default () => {
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2 subTitle'>
        只需2分钟即可测出你是谁及你的性格
      </View>
      <AtButton type="primary" circle className='startBtn' onClick={() => {
          Taro.navigateTo({
            url: '/pages/doQuestion/index'
          })
        }
      }
      >
        点击开始测试
      </AtButton>
      <Image
        className='headerBg'
        src={headerBg}
      />
      <GlobalFooter />

    </View>
  )
}
