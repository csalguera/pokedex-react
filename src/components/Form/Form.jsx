// npm modules
import { useState } from "react"

// components
import SearchField from "./SearchField"
import SubmitBtn from "./SubmitBtn"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

const Form = () => {
  const [search, setSearch] = useState({
    search: ''
  })

  function handleChange(evt) {
    setSearch({
      ...search,
      [evt.target.name]: evt.target.value
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault()
  }

  function clearSearch() {
    setSearch({
      search: ''
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <FlexCenterWrapper>
          <SearchField
            handleChange={handleChange}
            search={search}
          />
          <SubmitBtn
            search={search}
            clearSearch={clearSearch}
          />
        </FlexCenterWrapper>
      </form>
    </>
  )
}

export default Form