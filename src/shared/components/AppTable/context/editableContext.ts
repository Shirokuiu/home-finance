import { createContext } from 'react';
import type { FormInstance } from 'antd';

export const EditableContext = createContext<FormInstance | null>(null);
