import {Link, useSearchParams} from "react-router-dom"

export function BookLayout(){
  const [searchParams, setsearchParams] = useSearchParams({n:3}) // this is initial value
  cosnt number = searchParams.get("n") // useSearchParams will return array so we need to use get to read value

  return(
  <>
    <Link to="/book/${number}"> Book {number}</Link>
    <input 
      type="number"
      value="{number}"
      onChange= {e=>setsearchParams({n:e.target.value})}
  />
  </>
)
}
