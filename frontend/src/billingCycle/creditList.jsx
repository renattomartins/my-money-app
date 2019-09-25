import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component='input' /></td>
                <td><Field name='credits[0].value' component='input' /></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

export default CreditList