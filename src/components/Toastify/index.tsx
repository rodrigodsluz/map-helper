import { memo } from 'react';
import { toast, ToastPosition } from 'react-toastify';

import * as S from './styles';

enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
}

const configToast = {
  position: 'bottom-left' as ToastPosition,
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const Toastify = (
  message: string,
  title: string,
  type: 'success' | 'error' = NotificationType.SUCCESS,
) => {
  const content = (
    <div>
      <b>{title}</b>

      {message}
    </div>
  );

  if (type === NotificationType.SUCCESS) {
    toast.success(content, {
      ...configToast,
      className: 'success',
    });

    return;
  }

  if (type === NotificationType.ERROR) {
    toast.error(content, {
      ...configToast,
      className: 'error',
    });
  }
};

const ToastNotification = memo(() => <S.ToastAlertContainer limit={3} />);

export default ToastNotification;
