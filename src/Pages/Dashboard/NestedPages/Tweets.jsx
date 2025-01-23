import PostItem from '../../../Components/PostItem/PostItem'
import getUserInfo from '../../../hooks/getUserInfo'

const Tweets = () => {
  const {postList} = getUserInfo()
  return (
    <>
      <ul>
        {postList.map(item => (
          <PostItem item={item} key={item.id}/>
        ))}
      </ul>
    </>
  )
}

export default Tweets
