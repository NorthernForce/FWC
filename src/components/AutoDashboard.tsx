import {
    useEntry,
    BasicFmsInfo,
    SendableChooser,
    Field,
    FieldRobot,
    NetworkAlerts
} from "@frc-web-components/react";

import './AutoDashboard.css';

const AutoDashboard = () => {
    const [pose] = useEntry("FWC/StartingPose", [0, 0, 0]);
    return (
        <>
            <div className="auto-container">
                <div className="autonomous-chooser-container">
                    <SendableChooser className="autonomous-chooser" source-key="/FWC/AutonomousRoutine"/>
                </div>
                <Field className="field" rotationUnit="deg">
                    <FieldRobot color="blue" opacity={1} pose={pose}/>
                </Field>
                <BasicFmsInfo className="fmsInfo" source-key="/FMSInfo"/>
                <NetworkAlerts className="alerts" source-key="/FWC/Alerts"/>
            </div>
        </>
    )
}
export default AutoDashboard