import './message.css'

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="https://picsum.photos/id/1011/367/267" alt="" className="messageImg" />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae quam dolore tempora, quos perspiciatis voluptatum, sapiente veritatis repudiandae, atque incidunt enim! Possimus delectus iste mollitia incidunt natus ipsum iure?</p>
      </div>
      <div className="messageBottom">
        1 hour ago
      </div>
    </div>
  )
}
