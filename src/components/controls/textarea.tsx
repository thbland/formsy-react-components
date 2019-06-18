import * as React from 'react';
import {CommonProps} from './common-prop-types';

type ControlProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type ControlPropsCleaned = Omit<ControlProps, 'id' | 'name'>;

interface TextareaControlProps extends CommonProps, ControlPropsCleaned {
  className: string;
  cols: number;
  rows: number;
  value: string;
}

const defaultProps = {
  className: 'form-control',
  cols: 0, // React doesn't render the cols attribute if it is zero
  rows: 3,
  value: '',
};

class TextareaControl extends React.Component<TextareaControlProps, {}> {
  public element: React.RefObject<HTMLTextAreaElement>;

  public static defaultProps = defaultProps;

  public constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  public render() {
    return <textarea {...this.props} ref={this.element} />;
  }
}

export {TextareaControlProps};
export default TextareaControl;
