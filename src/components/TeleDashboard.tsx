import {
    Canvas, CanvasMjpgStream,
    Field,
    FieldRobot,
    useEntry
} from "@frc-web-components/react";
import "./css/TeleDashboard.css"
import StatusLight from "./StatusLight.tsx";

const TeleDashboard = () => {
    const [pose] = useEntry("/FWC/Field/Robot", [0, 0, 0]);
    const [isRed] = useEntry("/FMSInfo/IsRedAlliance", false)


    return (
        <div className="teleContainer">
            <Canvas id="camera">
                <CanvasMjpgStream source-key="FWC/Teleoporated/Camera" />
            </Canvas>
            <Field
                className="tele-field"
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
            >
                <FieldRobot color={isRed ? "red" : "blue"} opacity={1} pose={pose} />
            </Field>
            <div className="status-container">
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/canTarget">Can Target</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/hasNote">Has Note</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/shooterReady">Shooter Ready</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/wristReady">Wrist Ready</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/wristManual">Wrist Manual</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/aimReady">Aim Ready</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/readyToShoot">Ready To Shoot</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/closeShotEnabled">Close Shot Enabled</StatusLight>
                <StatusLight className="status-light" multiColor={false} sourceKey="/FWC/statusLights/ampShotEnabledLight">Amp Shot Enabled Light</StatusLight>
            </div>
        </div>
    );
};

export default TeleDashboard;
