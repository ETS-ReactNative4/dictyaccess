// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

import MiniCircos from "features/BirdsEye/Circos/MiniCircos"
import {
  chr1,
  chr2,
  chr3,
  chr4,
  chr5,
  chr6,
} from "features/BirdsEye/Circos/utils/geneArrays"
import chromosomes from "common/data/circos/chromosomes.json"

const styles = (theme: Object) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "90%",
    height: "100%",
  },
  subhead: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
}

/**
 * This is the chromosome image grid display that appears on the main Birdseye Dashboard page.
 */

const ChromosomeImageGridDisplay = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} cols={3} className={classes.gridList}>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr1">
            <center>
              <MiniCircos
                genes={chr1}
                chr={chromosomes.data[0]}
                name="chr1"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 1"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr2">
            <center>
              <MiniCircos
                genes={chr2}
                chr={chromosomes.data[1]}
                name="chr2"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 2"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr3">
            <center>
              <MiniCircos
                genes={chr3}
                chr={chromosomes.data[2]}
                name="chr3"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 3"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr4">
            <center>
              <MiniCircos
                genes={chr4}
                chr={chromosomes.data[3]}
                name="chr4"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 4"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr5">
            <center>
              <MiniCircos
                genes={chr5}
                chr={chromosomes.data[4]}
                name="chr5"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 5"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr6">
            <center>
              <MiniCircos
                genes={chr6}
                chr={chromosomes.data[5]}
                name="chr6"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 6"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ChromosomeImageGridDisplay)
