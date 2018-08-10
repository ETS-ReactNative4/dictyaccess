// @flow
import React, { Component } from "react"
import Circos from "circos"
import { withRouter } from "react-router-dom"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"
import Grid from "@material-ui/core/Grid"

import LegendBox from "common/components/Legend/LegendBox"
import LegendHeader from "common/components/Legend/LegendHeader"
import LegendBody from "common/components/Legend/LegendBody"
import SvgVerticalGrid from "./SvgVerticalGrid"
import chrNameExtender from "./utils/chrNameExtender"

type Props = {
  /** Genes data */
  genes: Array<Object>,
  /** Chromosomes data */
  chr: Array<Object>,
  /** Legend description for the shown graph */
  description: string,
  /** React Router's match object */
  match: Object,
}

class CircosGraph extends Component<Props> {
  componentDidMount() {
    const { genes, chr } = this.props

    const posStrand = genes
      .filter(item => item.attributes.strand === "+")
      .map(d => {
        return {
          block_id: d.attributes.block_id,
          end: d.attributes.end,
          start: d.attributes.start,
          strand: d.attributes.strand,
        }
      })
    const negStrand = genes
      .filter(item => item.attributes.strand === "-")
      .map(d => {
        return {
          block_id: d.attributes.block_id,
          end: d.attributes.end,
          start: d.attributes.start,
          strand: d.attributes.strand,
        }
      })
    let myCircos = new Circos({
      width: 750,
      height: 750,
      container: "#stackChart",
    })
    myCircos.layout(
      [
        {
          id: chr.attributes.id,
          len: chr.attributes.length,
          label: chr.attributes.name,
          color: "#85a9e5",
        },
      ],
      {
        innerRadius: 290,
        outerRadius: 310,
        gap: 0,
        labels: {
          display: false,
          // position: "center",
          // size: 30,
          // color: "#000000",
          // radialOffset: -250,
        },
        ticks: {
          display: true,
          color: "grey",
          spacing: 100000,
          labels: true,
          labelSpacing: 10,
          labelDisplay0: true,
          majorSpacing: 5,
          size: {
            minor: 2,
            major: 5,
          },
        },
      },
    )
    myCircos.stack("negative-strands", negStrand, {
      innerRadius: 250,
      outerRadius: 290,
      thickness: 10,
      margin: 0.01 * chr.attributes.length,
      direction: "in",
      strokeWidth: 0,
      color: "blue",
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
      logScale: true,
    })
    myCircos.stack("positive-strands", posStrand, {
      innerRadius: 320,
      outerRadius: 370,
      thickness: 10,
      margin: 0.01 * chr.attributes.length,
      direction: "out",
      strokeWidth: 0,
      color: "red",
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
      logScale: true,
    })
    myCircos.render()
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate")
    console.log("curr: ", this.props)
    console.log("prev: ", prevProps)
    window.location.reload()
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12} lg={9}>
            <center>
              <h1>{chrNameExtender(match.params.id)}</h1>
            </center>
          </Grid>
          <Grid item xs={12} md={12} lg={9}>
            <br />
            <center>
              <ReactSVGPanZoom
                width={750}
                height={750}
                toolbarPosition="left"
                miniaturePosition="none"
                background="#fff">
                <svg width={750} height={750}>
                  <g id="stackChart" />
                </svg>
              </ReactSVGPanZoom>
            </center>
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <LegendBox>
              <LegendHeader color="info" />
              <LegendBody>{this.props.description}</LegendBody>
            </LegendBox>
            <SvgVerticalGrid />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(CircosGraph)
