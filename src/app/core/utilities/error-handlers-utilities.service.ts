import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlersUtilitiesService {
  triggerErrorToast(response: any) {
    //this.toastr.warning(response.error.error);
    //this.spinner.hide('app');
  }

  triggerErrorToastAuth(response: any) {
    const msg = response.error.message;
    //this.toastr.error(msg);
    //this.spinner.hide('app');
  }

  triggerErrorModal(response: any) {
    //this.spinner.hide('app');
    //const m = this.ngbModal.open(ModalErrorHttpComponent);
    /*  m.componentInstance.codigo = response.status;

    if (response) {
      m.componentInstance.errors = response.error.message;
    } else {
      m.componentInstance.errors = response.message;
    }

    if (
      Array.isArray(response.error.message) ||
      Array.isArray(response.message)
    ) {
      m.componentInstance.array = true;
    } else {
      m.componentInstance.array = false;
    }

    return m.componentInstance; */
  }
}
