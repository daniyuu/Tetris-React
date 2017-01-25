/**
 * Created by yueych on 1/22/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Board from './../components/Board';
import {refreshBoard} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        gameStart: state.gameBoard.gameStart,
        testText: 'testText'
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(refreshBoard())
        }
    }
};

const ControllerBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default ControllerBoard;