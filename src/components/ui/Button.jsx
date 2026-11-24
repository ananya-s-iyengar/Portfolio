import Icon from './Icon.jsx';

/**
 * Renders a link button. If `href` is empty it renders a disabled,
 * clearly-labelled placeholder rather than a broken link.
 */
export default function Button({
  href,
  variant = 'primary',
  icon,
  children,
  external = false,
  download,
  placeholderLabel,
  onClick,
  type,
  disabled,
  className = '',
}) {
  const cls = `btn btn-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (type === 'submit' || onClick) {
    return (
      <button type={type || 'button'} className={cls} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  if (!href) {
    return (
      <span className={`${cls} is-disabled`} role="link" aria-disabled="true" title={placeholderLabel}>
        {content}
      </span>
    );
  }

  return (
    <a
      className={cls}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download } : {})}
    >
      {content}
    </a>
  );
}
