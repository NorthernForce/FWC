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
    let [pose] = useEntry("/FWC/auto_field/Robot", [0, 0, 0])
    let [infos] = useEntry("/FWC/infos", [])
    let [warnings] = useEntry("/FWC/warnings", [])
    let [errors] = useEntry("/FWC/errors", [])
    return (
        <>
            <div className="auto-container">
                <SendableChooser className="autonomous-chooser" source-key="/FWC/autonomous"/>
                <Field className="field" rotationUnit="rad">
                    <FieldRobot pose={pose}/>
                </Field>
                <div className="fms-container">
                    <BasicFmsInfo className="fms-info" source-key="/FMSInfo"/>
                    <NetworkAlerts className="alerts" infos={infos} warnings={warnings} errors={errors}/>
                </div>
            </div>
        </>
    )
}
export default AutoDashboard