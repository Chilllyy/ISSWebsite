export default function ModItemWidget({name, desc, src, alt, url}) {
    return (
        <li className="border rounded-2xl drop-shadow-2xl w-75 h-75">
            <img src={src} alt={alt} className="h-1/2 rounded-t-2xl w-full [image-rendering:pixelated] bg-neutral-200 dark:bg-neutral-950" />
            <div className="h-1/2 flex flex-col gap-3 justify-center items-center w-full">
                <p className="flex">{name}</p>
                <p className="flex">{desc}</p>
                <a href={url}>
                    <button className="hover:cursor-pointer secondary primary-text-inverse p-2 rounded-2xl">
                        Details
                    </button>
                </a>
            </div>
        </li>
    )
}