// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"

import TypographyWrapper from "common/components/TypographyWrapper"
import DataSetDisplay from "features/BirdsEye/Global/DataSets/DataSetDisplay"
import BirdsEyeTabList from "./BirdsEyeTabList"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** The birdseye slice of state */
  birdseye: Object,
}

/**
 * This is the main Bird's Eye Dashboard component.
 * It renders at /birdseye
 */

const BirdsEyeDashboard = (props: Props) => {
  const {
    birdseye: { currentTab },
    classes,
  } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList />
      {currentTab === 0 && (
        <TypographyWrapper>
          <DataSetDisplay />
        </TypographyWrapper>
      )}
      {currentTab === 1 && (
        <TypographyWrapper>
          <center>Work in progress</center>
        </TypographyWrapper>
      )}
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeDashboard))
