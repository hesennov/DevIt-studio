import { Spin } from 'antd'
import style from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <Spin size='large' />
    </div>
  )
}

export default Spinner
