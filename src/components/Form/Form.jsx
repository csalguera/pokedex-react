// npm modules
import { useState } from "react"

// components
import SearchField from "./SearchField"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

const Form = () => {
  const [search, setSearch] = useState({
    search: ''
  })

  const invalidQuery = (search.search.length <= 1)

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
            clearSearch={clearSearch}
            invalidQuery={invalidQuery}
          />
        </FlexCenterWrapper>
      </form>
    </>
  )
}

export default Form