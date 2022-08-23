export function Button() {
  let counter = 0

  function yo() {
    return alert('yo')
  }

  return (
    <div>
      <button onClick={yo}>YouTubeSubscribe-{counter}</button>
    </div>
  )
}
