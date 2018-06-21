import * as React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Switch,
    ScrollView
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import StepIndicator from 'react-native-step-indicator';

import Description from './CreateEventComponents/Description';
import SelectTemplate from './CreateEventComponents/SelectTemplate';
import ToDoList from './CreateEventComponents/ToDoList';
import Confirmation from './CreateEventComponents/Confirmation';

const labels = ["Description", "Event Type", "To-do List", "Confirmation"];
interface ICreateEventProps {
}

interface ICreateEventState {
    step: number
}

export default class CreateEvent extends React.Component<{}, ICreateEventState> {
    static navigatorStyle = {
        tabBarHidden: true
    };

    constructor(props: {}) {
        super(props);
        this.state = {
            step: 1
        }
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep() {
        this.setState({
            step: this.state.step - 1
        })
    }

    renderComponent(step) {
        switch (step) {
            case 1:
                return <Description nextStep={this.nextStep.bind(this)} />
            case 2:
                return <SelectTemplate nextStep={this.nextStep.bind(this)}
                    prevStep={this.prevStep.bind(this)} />
            case 3:
                return <ToDoList nextStep={this.nextStep.bind(this)}
                    prevStep={this.prevStep.bind(this)} />

            case 4:
                return <Confirmation />
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderComponent(this.state.step)}
            </ScrollView>
        )
    }
}