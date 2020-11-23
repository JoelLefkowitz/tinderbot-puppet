from setuptools import setup

if __name__ == "__main__":
    setup(
        install_requires=[
            "django",
            "djangorestframework",
            "safe_environ",
            "randutils",
        ],
        extras_require={
            "dist": ["wheel", "twine"],
            "docs": [
                "sphinx",
                "pyimport",
                "pypandoc",
                "sphinxcontrib.apidoc",
                "sphinxcontrib.pandoc_markdown",
                "sphinx-autodoc-annotation",
                "yummy_sphinx_theme",
            ],
            "tests": [
                "pytest",
                "pytest-cov",
                "pytest-html",
                "pytest-sugar",
                "pytest-bdd",
                "pytest-watch",
            ],
        },
    )
