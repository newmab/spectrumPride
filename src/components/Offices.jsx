import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Merced Center" invert={invert}>
          2848 Park Ave
          <br />
          Merced, California 95348
        </Office>
      </li>
      <li>
        <Office name="Fresno Center" invert={invert}>
          1586 W. Shaw Ave
          <br />
          Fresno, California 93711
        </Office>
      </li>
      <li>
      <Office name="Visalia Center" invert={invert}>
          316 S. Dunworth St
          <br />
          Visalia, California 93711
        </Office>
      </li>
    </ul>
  )
}
