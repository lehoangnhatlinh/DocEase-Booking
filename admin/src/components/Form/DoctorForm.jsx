import React, { useState } from 'react';

function DoctorForm() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm); // Đảo ngược trạng thái khi nhấp vào nút
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Hiển thị biểu mẫu</button>
            {showForm && (
                <form>
                    {/* Các trường biểu mẫu */}
                </form>
            )}
        </div>
    );
}

export default DoctorForm;