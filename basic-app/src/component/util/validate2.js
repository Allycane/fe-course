/**
 * UserInfo 컴포넌트 폼 체크 함수
 */

// validateUserInfo는 컴포넌트가 아닌 함수이기 때문에 파라미터 인자로 받을 수 있음
export const validateUserInfo2 = (refs) => {
        if (refs.current.name.value === '') {
            refs.current.name.focus();
            return false;
        }
        else if (refs.current.age.value === '') {
            refs.current.age.focus();
            return false;
        }
        else if (refs.current.address.value === '') {
            refs.current.address.focus();
            return false;
        }
        else if (refs.current.job.value === '') {
            refs.current.job.focus();
            return false;
        }
        return true;
    }