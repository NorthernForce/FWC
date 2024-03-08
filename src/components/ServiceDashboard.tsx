import { Canvas, CanvasMjpgStream, Gauge, NumberSlider, Pdp, RobotCommand, SendableChooser, Swerve, useEntry } from '@frc-web-components/react';
import './css/ServiceDashboard.css';

const ServiceDashboard = () => {
    const [wheelLocations] = useEntry("/FWC/wheel_locations", [0, 0, 0, 0, 0, 0, 0, 0])
    const [measuredStates] = useEntry("/FWC/measured", [0, 0, 0, 0, 0, 0, 0, 0])
    const [desiredStates] = useEntry("/FWC/desired", [0, 0, 0, 0, 0, 0, 0, 0])
    const [wristAngle] = useEntry("/FWC/wrist_angle", 0)
    const [shooterMaxSpeed] = useEntry("/FWC/max_shooter_speed", 0)
    const [topShooterSpeed] = useEntry("/FWC/top_shooter_speed", 0)
    const [bottomShooterSpeed] = useEntry("/FWC/bottom_shooter_speed", 0)
    const [distance] = useEntry("/FWC/distance", 0)
    const [noteYaw] = useEntry("/FWC/note_yaw", 0)
    const [voltage] = useEntry("/FWC/voltage", 0)
    const [totalCurrent] = useEntry("/FWC/total_current", 0)
    const [channels] = useEntry("/FWC/channels", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    return (
        <>
            <div className="service-container">
                <div className="service-drive-container">
                    <h1 className="service-drive-header">Drivetrain</h1>
                    <RobotCommand name="Calibrate Swerve Drive" className="service-command" source-key="/FWC/calibrate_drive" style={{
                        backgroundColor: "black"
                    }}/>
                    <Swerve className="service-drive-drive" wheelLocations={wheelLocations} measuredStates={measuredStates} desiredStates={desiredStates}/>
                </div>
                <div className="service-wrist-container">
                    <h1 className="service-wrist-header">Wrist</h1>
                    <RobotCommand name="Calibrate Wrist" className="service-command" source-key="/FWC/calibrate_wrist" style={{
                        backgroundColor: "black"
                    }}/>
                    <Gauge className="service-wrist-gauge" value={wristAngle} min={22} max={56} />
                </div>
                <div className="service-shooter-container">
                    <h1 className="service-wrist-header">Shooter</h1>
                    <RobotCommand name="Log Wrist and Shooter Data" className="service-command" source-key="/FWC/log_data" style={{
                        backgroundColor: "black"
                    }}/>
                    <NumberSlider min={0} max={shooterMaxSpeed} />
                    <br/>
                    <Gauge className="service-wrist-gauge" value={topShooterSpeed} min={0} max={shooterMaxSpeed} />
                    <Gauge className="service-wrist-gauge" value={bottomShooterSpeed} min={0} max={shooterMaxSpeed} />
                </div>
                <div className="service-orange-pi-container">
                    <h1 className="service-orange-pi-header">Orange Pi</h1>
                    <Canvas className="service-orange-pi-camera">
                        <CanvasMjpgStream className="service-orange-pi-camera-stream" origin={[0,0]} crosshairColor="white" width={320} height={240}
                            srcs={["mjpg:http://10.1.72.31:1181/?action=stream"]}/>
                    </Canvas>
                    <h3 className="service-orange-pi-distance">Current distance: {distance}</h3>
                </div>
                <div className="service-xavier-container">
                    <h1 className="service-xavier-header">Xavier</h1>
                    <Canvas className="service-xavier-camera">
                        <CanvasMjpgStream className="service-xavier-camera-stream" origin={[0,0]} crosshairColor="white" width={320} height={240}
                            srcs={["mjpg:http://10.1.72.47:1181/?action=stream"]}/>
                    </Canvas>
                    <h3 className="service-xavier-angle">Current heading: {noteYaw}</h3>
                </div>
                <div className="service-xavier-container">
                    <h1 className="service-xavier-header">Other</h1>
                    <RobotCommand name="Play Music" className="service-command" source-key="/FWC/play_music"/>
                    <br/>
                    <SendableChooser label="Song To Play" source-key="/FWC/music_selector" />
                    <Pdp voltage={voltage} totalCurrent={totalCurrent} channels={channels} />
                </div>
            </div>
        </>
    )
}
export default ServiceDashboard