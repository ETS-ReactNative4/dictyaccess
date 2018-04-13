// @flow
import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "./TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>
}

const PlasmidsList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">List of Plasmids</HeaderStyle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plasmid Descriptor</TableCell>
            <TableCell>Plasmid Names</TableCell>
            <TableCell>Plasmid ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.descriptor}</TableCell>
              <TableCell>{item.names}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PlasmidsList