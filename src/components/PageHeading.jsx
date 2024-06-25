const PageHeading = ({ heading }) => {
    return (
        <div className="flex justify-center gap-1 items-center before:h-[0.8px] before:bg-accent before:w-8 after:h-[0.8px] after:bg-accent after:w-8 py-6">
            <h1 className="text-3xl font-cardo">{heading}</h1>
        </div>
    )
}

export default PageHeading