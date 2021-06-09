import * as React from 'react';
import { EmitterSubscription, ViewProps } from 'react-native';


declare class PassKit {
  static AddPassButtonWidth: number
  static AddPassButtonHeight: number
  static AddPassButtonStyle: AddPassButtonStyle
  static canAddPasses(): Promise<boolean>;
  static addPass(base64Encoded: string, fileProvider?: string): Promise<void>;
  static presentAddPassesViewController(base64Encoded: string): Promise<void>;
  static addEventListener(
    eventType: string,
    listener: Function,
    context?: Object,
  ): EmitterSubscription;
  static removeEventListener(eventType: string, listener: Function): void;
}

interface AddPassButtonStyle {
  black: number
  blackOutline: number
}

interface AddPassButtonProps extends ViewProps {
  addPassButtonStyle: number;
  onPress: Function;
}

export declare class AddPassButton extends React.Component<
  AddPassButtonProps
> {}

export default PassKit;
