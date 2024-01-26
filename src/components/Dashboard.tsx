import {
    useEntry,
    BasicFmsInfo,
    SendableChooser,
    Field,
    FieldRobot,
    Field3d, Field3dObject,
} from "@frc-web-components/react";

import {CSSProperties} from "react";

const Dashboard = () => {
    const [pose] = useEntry("/SmartDashboard/Field/Robot", [0, 0, 0]);


    const divStyles: CSSProperties = {
        display: "flex",
        gap: "15px",
        alignItems: "start",
    };

    const fieldStyles: CSSProperties = {
        width: "500px",
        height: "300px",
    };

    return (
        <>
            <div style={divStyles}>
                <SendableChooser source-key="/Shuffleboard/Autonomous/SendableChooser[0]"/>
                <BasicFmsInfo source-key="/FMSInfo"/>
            </div>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
            >
                <FieldRobot color="blue" opacity={1} pose={pose}/>
            </Field>
            <Field3d origin="blue">
                <Field3dObject name="KitBot" translation={[1,2,0]} rotation={[0,0,0,0]} />
            </Field3d>
        </>
    );
};

export default Dashboard;
