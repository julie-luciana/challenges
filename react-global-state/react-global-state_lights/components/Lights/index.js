import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, onToggleIsOn }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={light.isOn}
            onToggleIsOn={() => onToggleIsOn(light.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}

/* Change the Lights component to render the lights dynamically
       based on the array in state (.map). 
       You'll need to pass the array down through props. 
       --> in return
       */
