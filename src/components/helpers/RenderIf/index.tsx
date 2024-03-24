'use client';

import { RenderIfFC } from './types';

const RenderIf: RenderIfFC = ({ children, condition }) => (condition ? children : null);

export default RenderIf;
