import { Canvas, CanvasMjpgStream, Field, FieldRobot, RobotCommand, useEntry } from '@frc-web-components/react';
import './css/ServiceDashboard.css';

const ServiceDashboard = () => {
    const [pose] = useEntry("/FWC/field/Robot", [0, 0, 0])
    return (
        <>
            <div className="service-container">
                <div className="command-bar">
                    <RobotCommand name="Calibrate Swerve Drive" className="service-command" source-key="/FWC/calibrate_drive"/>
                    <RobotCommand name="Play Crab Rave" className="service-command" source-key="/FWC/play_crab_rave"/>
                </div>
                <Field className="service-field" rotationUnit="rad">
                    <FieldRobot pose={pose}/>
                </Field>
                <div className="service-cameras">
                    <Canvas className="service-camera">
                        <CanvasMjpgStream className="service-camera-stream" origin={[0,0]} crosshairColor="white" width={320} height={240}
                            srcs={["mjpg:http://10.1.72.47:1181/?action=stream"]}/>
                    </Canvas>
                    <Canvas className="service-camera">
                        <CanvasMjpgStream className="service-camera-stream" origin={[0,0]} crosshairColor="white" width={320} height={240}
                            srcs={["mjpg:http://10.1.72.31:1181/?action=stream"]}/>
                    </Canvas>
                </div>
            </div>
        </>
    )
}
export default ServiceDashboard