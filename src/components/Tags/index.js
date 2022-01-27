import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tags(props) {
    return (

        <div class="flex flex-col justify-between items-center flex-1 mt-6">
            <div class="w-full flex justify-center">
                <div class="w-4/5 flex justify-center">
                    <div
                        class={`flex items-center py-4 hover:bg-gray-200 text-gray-700 rounded-2xl dark:bg-gray-700 dark:text-gray-200 hover:cursor-pointer px-6 w-full mb-0.5 ${props.bgColor} ${props.color}`}
                    >
                        <FontAwesomeIcon icon={props.icon} className={props.iconColor} />
                        <span class="mx-4 font-medium">{props.text}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Tags;
