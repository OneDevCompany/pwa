import * as React from 'react'
import { FC } from 'react'
import classNames from 'classnames'

type ProgressBarProps = {
  hidden?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = ({ children, hidden }) => (
  <div className={classNames('odc-progress-bar', { '-hidden': hidden })}>
    {children}
  </div>
)

ProgressBar.defaultProps = {
  hidden: false,
}
