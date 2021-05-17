import * as React from 'react'
import { FC } from 'react'
import classNames from 'classnames'

type DatagridAnimationWrapperProps = {
  open?: boolean
}

export const DatagridAnimationWrapper: FC<DatagridAnimationWrapperProps> = ({
  children,
  open,
}) => (
  <div
    className={classNames('odc-datagrid__animation-wrapper', {
      'odc-datagrid__animation-wrapper--open': open,
    })}
  >
    {children}
  </div>
)

DatagridAnimationWrapper.defaultProps = {
  open: false,
}
