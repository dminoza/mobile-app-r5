import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import axios from '../../../plugins/axios';
import axios from '../../../plugins/axios';
import { mutateToken } from '../authSlice';
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import {
    AmbientLight,
    SphereGeometry,
    Fog,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SpotLight,
  } from 'three';

import DeviceCard from "../components/deviceCard";


export default function Login () {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const myDevices = useSelector((state) => state.devices.myDevice)

    const [devices, setDevices] = useState([
      {
        noOfDevices: 1,
        noOfHours: 2
      },
      {
        noOfDevices: 2,
        noOfHours: 1
      }
    ])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {
            (myDevices != undefined) ? myDevices.map(obj => <DeviceCard noOfDevices={obj.noOfDevices} noOfHours={obj.noOfHours} />) : null
          }
          <Button onPress={() => {
            navigation.navigate('LainNgaScreen');
          }} title="lain nga screen"></Button>
        </View>
    )
}

function onContextCreate(gl) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 1, 1, 1);
  
    // Create vertex shader (shape & position)
    const vert = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      vert,
      `
      void main(void) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 150.0;
      }
    `
    );
    gl.compileShader(vert);
  
    // Create fragment shader (color)
    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      frag,
      `
      void main(void) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `
    );
    gl.compileShader(frag);
  
    // Link together into a program
    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);
  
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  
    gl.flush();
    gl.endFrameEXP();
  }