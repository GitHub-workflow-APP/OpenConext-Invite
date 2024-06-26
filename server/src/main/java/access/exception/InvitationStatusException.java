package access.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class InvitationStatusException extends RuntimeException {

    public InvitationStatusException(String message) {
        super(message);
    }
}
