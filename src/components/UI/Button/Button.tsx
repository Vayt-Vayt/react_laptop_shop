import styless from "./ButtonClose.module.scss";

interface buttonProps {
  children: any;
  props?: any;
  onClick?: any;
}

const Button = ({ children, ...props }: buttonProps) => {
  return (
    <button {...props} className={styless.btnStatic}>
      {children}
    </button>
  );
};

export default Button;
