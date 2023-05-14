/**
 * @author PaulSeo
 * @description 최소한의 기본적인 기능만을 가지고 있는 Map Component
 */
import React from 'react';
import { Stage, Layer } from 'react-konva';

const Map = () => {
  return (
    <Stage width={600} height={600} draggable style={{ backgroundColor: 'white' }}>
      <Layer>
        <canvas></canvas>
      </Layer>
    </Stage>
  );
};

export default Map;
