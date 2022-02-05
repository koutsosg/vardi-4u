import React from "react"
import { Icon } from "semantic-ui-react"

const ControlPanel = props => {
  const { pageNumber, numPages, setPageNumber, scale, setScale } = props
  const isFirstPage = pageNumber === 1
  const isLastPage = pageNumber === numPages

  const firstPageClass = isFirstPage ? "disabled" : "clickable"
  const lastPageClass = isLastPage ? "disabled" : "clickable"

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1)
  }

  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1)
  }
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1)
  }
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages)
  }

  const isMinZoom = scale < 0.6
  const isMaxZoom = scale >= 2.0

  const zoomInClass = isMinZoom ? "ddisabled" : "clickable"
  const zoomOutClass = isMaxZoom ? "ddisabled" : "clickable"

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.2)
  }
  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.2)
  }

  return (
    <div className="control-panel m-5 p-3 mx-auto d-flex align-items-baseline justify-content-center flex-wrap">
      <div className="d-flex justify-content-between align-items-baseline">
        <Icon
          className={`mx-3 ${firstPageClass}`}
          name="angle double left"
          onClick={goToFirstPage}
        />
        <Icon
          className={`mx-3 ${firstPageClass}`}
          name="angle left"
          onClick={goToPreviousPage}
        />

        <span>
          Σελίδα {pageNumber} απο {numPages}
        </span>

        <Icon
          className={`mx-3 ${lastPageClass}`}
          name="angle right"
          onClick={goToNextPage}
        />
        <Icon
          className={`mx-3 ${lastPageClass}`}
          name="angle double right"
          onClick={goToLastPage}
        />
      </div>
      <div className="d-flex justify-content-between align-items-baseline">
        <Icon
          className={`mx-3 ${zoomOutClass}`}
          name="zoom-out"
          onClick={zoomOut}
        />

        <span>{(scale * 100).toFixed()}%</span>
        <Icon
          className={`mx-3 ${zoomInClass}`}
          name="zoom-in"
          onClick={zoomIn}
        />
      </div>
    </div>
  )
}

export default ControlPanel
