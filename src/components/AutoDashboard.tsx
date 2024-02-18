import {
    BasicFmsInfo,
    SendableChooser,
    Field,
    NetworkAlerts,
    FieldRobot,
    useEntry
} from "@frc-web-components/react";

import './AutoDashboard.css';

const AutoDashboard = () => {
    const [pose] = useEntry("/FWC/auto_field/Robot", [0, 0, 0])
    return (
        <>
            <div className="auto-container">
                <SendableChooser className="autonomous-chooser" source-key="/FWC/autonomous"/>
                <Field className="field" rotationUnit="rad">
                    <FieldRobot pose={pose}/>
                </Field>
                <div className="fms-container">
                    <BasicFmsInfo className="fms-info" source-key="/FMSInfo"/>
                    <NetworkAlerts className="alerts" source-key="/FWC/alerts"/>
                </div>
            </div>
        </>
    )
}
export default AutoDashboard